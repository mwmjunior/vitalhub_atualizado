import {
    GenericPrescriptionContainer,
    GenericPrescriptionImageInput,
    GenericProfileInput,
    GenericProfileInputAddress,
    GenericProfileInputContainer,
    GenericProfileInputContainerAddress,
    GenericProfileInputEdition,
    GenericProfileTextArea,
    GenericProfileTextAreaEdition
} from "../../components/GenericProfileInput/Style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LabelText } from "../LabelText/Style";

export const GenericInput = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainer>
            <LabelText>{textLabel}</LabelText>
            <GenericProfileInput placeholder={placeholder} />
        </GenericProfileInputContainer>
    )
}

export const GenericProfileAddressInput = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainerAddress>
            <LabelText>{textLabel}</LabelText>
            <GenericProfileInputAddress placeholder={placeholder} />
        </GenericProfileInputContainerAddress>
    )
}

export const GenericTextArea = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainer>
            <LabelText>{textLabel}</LabelText>
            <GenericProfileTextArea
                placeholder={placeholder}
                multiline
                numberOfLines={5}
                maxLength={200}
            />
        </GenericProfileInputContainer>
    )
}

export const GenericEditTextArea = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainer>
            <LabelText>{textLabel}</LabelText>
            <GenericProfileTextAreaEdition
                placeholder={placeholder}
                multiline
                numberOfLines={5}
                maxLength={200}
            />
        </GenericProfileInputContainer>
    )
}

export const GenericEditInput = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainer>
            <LabelText>{textLabel}</LabelText>
            <GenericProfileInputEdition placeholder={placeholder} />
        </GenericProfileInputContainer>
    )
}

export const GenericPrescriptionInput = ({ textLabel, placeholder }) => {
    return (
        <GenericProfileInputContainer>
            <LabelText>{textLabel}</LabelText>
            <GenericPrescriptionContainer>
                <MaterialCommunityIcons name="alert-box-outline" size={24} color="black" />
                <GenericPrescriptionImageInput placeholder={placeholder} />
            </GenericPrescriptionContainer>
        </GenericProfileInputContainer>
    )
}

