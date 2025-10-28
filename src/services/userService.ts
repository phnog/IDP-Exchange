import { supabase } from "./db/supabaseClient";

export interface UserData {
  nome: string;
  telefone: string;
  email: string;
  curso: string;
  resultado?: string;
}

export async function salvarUser(user: UserData) {
  const { data, error } = await supabase.from("Users").insert([user]);

  if (error) {
    console.error("Erro ao salvar usuário:", error.message);
    return { success: false, error };
  }

  console.log("Usuário salvo com sucesso:", data);
  return { success: true, data };
}
