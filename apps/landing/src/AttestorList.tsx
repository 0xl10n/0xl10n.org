import ProfileCard from "./ProfileCard"
import { Attestor } from "./domain/attestor"

const AttestorList = ({ attestors }: { attestors: Attestor[] }) => {

    return (
        <div>
            {
                attestors.map((attestor: Attestor) => {
                    return (
                        <ProfileCard profile={attestor} />
                    )
                })
            }

        </div>
    )
}

export default AttestorList