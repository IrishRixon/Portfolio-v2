import type { emailContent } from "@/Interface/interface";
import { axiosInstance } from "./axiosConfig";

export const postEmailForm = (body: emailContent) => {
    return axiosInstance.post("", body);
};
