"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() =>{
        Crisp.configure("fd819b2e-5b1e-4d14-b141-7606f894d776");
    }, []);

    return null;
}