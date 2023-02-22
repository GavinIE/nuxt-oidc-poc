import ApplicationService from "~~/services/application-service";
import AuthService from "~~/services/auth-service";
import { useAuth } from "~~/stores/auth";

export const useServices = () => {
    const authStore = useAuth();

    return {
        $auth: new AuthService(),
        $app: new ApplicationService(authStore.accessToken)
    }
}