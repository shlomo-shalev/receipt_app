// complete components
import CommonButtonInterface from "app/View/Components/Complete/MaterialDesign/CommonButton/CommonButtonInterface";

interface SegmentedButtonInterface {
    buttons: Array<CommonButtonInterface> & { 0: CommonButtonInterface },
    classes?: {
        root: string,
    },
}

export default SegmentedButtonInterface;