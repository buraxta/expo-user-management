import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://okfzskkmdwywqpcksvxq.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZnpza2ttZHd5d3FwY2tzdnhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMTMzMDgsImV4cCI6MjA0NDU4OTMwOH0.v-hCBKlGpCKslOA6BndyIca2ZtkZ_W5DbFha1EYobBQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
