import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SubmitButton({ argentinaSubscribe, boliviaSubscribe, chileSubscribe, colombiaSubscribe, costaRicaSubscribe, cubaSubscribe, dominicanRepublicSubscribe, ecuadorSubscribe, elSalvadorSubscribe, guatemalaSubscribe, hondurasSubscribe, mexicoSubscribe, nicaraguaSubscribe, panamaSubscribe, paraguaySubscribe, peruSubscribe, puertoRicoSubscribe, uruguaySubscribe, venezuelaSubscribe }) {

  const user = useUser();

  const submitPreferences = async () => {
    if (user) {
    const { data, error } = 
    
    await supabase
      .from('UserPreferences')
      .update({
        argentina_subscribe: argentinaSubscribe,
        bolivia_subscribe: boliviaSubscribe,
        chile_subscribe: chileSubscribe,
        colombia_subscribe: colombiaSubscribe,
        costarica_subscribe: costaRicaSubscribe,
        cuba_subscribe: cubaSubscribe,
        dominicanrepublic_subscribe: dominicanRepublicSubscribe,
        ecuador_subscribe: ecuadorSubscribe,
        elsalvador_subscribe: elSalvadorSubscribe,
        guatemala_subscribe: guatemalaSubscribe,
        honduras_subscribe: hondurasSubscribe,
        mexico_subscribe: mexicoSubscribe,
        nicaragua_subscribe: nicaraguaSubscribe,
        panama_subscribe: panamaSubscribe,
        paraguay_subscribe: paraguaySubscribe,
        peru_subscribe: peruSubscribe,
        puertorico_subscribe: puertoRicoSubscribe,
        uruguay_subscribe: uruguaySubscribe,
        venezuela_subscribe: venezuelaSubscribe
        })
      .eq('id', user.id)}
      }
    
return (
<div>
  <form onSubmit={submitPreferences()}>
  <a href="#" class="upgrade-btn" type="submit">Show me summaries for the selected countries</a>
  </form>

</div>)}
