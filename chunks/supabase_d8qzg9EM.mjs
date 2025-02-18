import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dlrqbvwtycjptpkkdhak.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRscnFidnd0eWNqcHRwa2tkaGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNzA4NTQsImV4cCI6MjA1Mzk0Njg1NH0.Dflqjxn-h5OURlMyqtPUkFDS1ieS5s9onjtixSOpSoA";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
