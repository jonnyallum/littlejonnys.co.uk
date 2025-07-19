import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

# Supabase configuration
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')

def get_supabase_client() -> Client:
    """
    Create and return a Supabase client instance
    """
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set in environment variables")
    
    return create_client(SUPABASE_URL, SUPABASE_KEY)

# Global client instance
supabase: Client = None

def init_supabase():
    """
    Initialize the global Supabase client
    """
    global supabase
    try:
        supabase = get_supabase_client()
        return True
    except Exception as e:
        print(f"Failed to initialize Supabase: {e}")
        return False

