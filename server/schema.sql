-- Teftiş Belge Üretim Modülü - Database Schema
-- PostgreSQL

-- Create database (run this separately if needed)
-- CREATE DATABASE teftis;

-- Users table (for SSO integration)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meb_id VARCHAR(100) UNIQUE,
    email VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'mufettis',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    template_code VARCHAR(20) NOT NULL,
    template_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    person_name VARCHAR(255),
    event_date DATE,
    form_data JSONB NOT NULL,
    pdf_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_template_code ON documents(template_code);
CREATE INDEX IF NOT EXISTS idx_documents_category ON documents(category);
CREATE INDEX IF NOT EXISTS idx_documents_created_at ON documents(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for documents
DROP TRIGGER IF EXISTS update_documents_updated_at ON documents;
CREATE TRIGGER update_documents_updated_at
    BEFORE UPDATE ON documents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Trigger for users
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Sample user for development (remove in production)
INSERT INTO users (id, email, name, role) 
VALUES ('00000000-0000-0000-0000-000000000001', 'test@meb.gov.tr', 'Test Müfettiş', 'mufettis')
ON CONFLICT (id) DO NOTHING;
