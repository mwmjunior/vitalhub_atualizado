import { SecondaryButton, SecondaryButtonText } from "./Style"


export const ButtonSecondary = ({onPress, placeholder = 'cancelar' }) => {
    return (
        <SecondaryButton>
            <SecondaryButtonText onPress={onPress}>{placeholder}</SecondaryButtonText>
        </SecondaryButton>
    )
}