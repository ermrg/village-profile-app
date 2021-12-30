import { householdDefault } from '../../defaultRequired'
import VPForm from './Forms/VPForm'

export default function AddHousehold() {
    return (
       <VPForm data={{household: householdDefault}} />
    )
}
