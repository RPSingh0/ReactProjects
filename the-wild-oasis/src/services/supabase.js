import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://bgfdvxmdhttvslgajxhp.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZmR2eG1kaHR0dnNsZ2FqeGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNDY4ODQsImV4cCI6MjAyMTgyMjg4NH0.uBR40TDz1EI02BDswM5nYPQgd4Ap3gwRPGSjBgNZNb0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;