// Code written by Lucas Mouette

import ProtectedWrapper from "@/components/ProtectedWrapper";
import TripListSection from "@/components/Trips/TripListSection";

export default function MyTripsPage() {
    return (
        <ProtectedWrapper>
            <main>
                <div>
                    <TripListSection />
                </div>   
            </main>
        </ProtectedWrapper>
    );
}