// Code written by Lucas Mouette

'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import verifyToken from "@/services/verifyToken"

interface ProtectedWrapperProps {
    children: React.ReactNode;
}

export default function ProtectedWrapper({ children }: ProtectedWrapperProps) {
    const [loading, setLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function verifyUser() {
            const authenticationStatus = await verifyToken();
            
            console.log("Authentication Status:", authenticationStatus);

            setIsVerified(authenticationStatus);
            setLoading(false);

            if (!authenticationStatus) {
                router.push("/login");
            }
        }

        verifyUser();
}, [router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isVerified ? <>{children}</> : null;
}