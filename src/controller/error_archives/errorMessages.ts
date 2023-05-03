export const possibleErrorMessages = {
    invalidId: (id: number) => `InvalidID: The person with id ${id} doesn't exists.`,
    fieldTypo: "FieldTypo: The fields 'age' and 'number' cannot be negative numbers.",
    fieldError: "FieldError: Missing field. Please review the requisition body elements Name - Surname - Age - Weight."
}

