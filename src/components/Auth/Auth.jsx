
import {supabase} from "../../supabaseClient.js";

    const Auth = () => {
        async function signInWithGoogle() {
            try {
                const {data, error} = await supabase.auth.signInWithOAuth({
                    provider: 'google'
                });
                if(error) throw error;
            } catch (error){
                console.log("Error: ", error);
            }
        }
        return(
            <span>
            <button
                onClick={signInWithGoogle}
                className="text-white hover:text-gray-200" // Add styling to match your header
            >
                Sign In With Google
            </button>
        </span>
        )
    }
export default Auth;

