export const formatDate = (input : Date) => {
    const date = new Date(input);

    return date.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}