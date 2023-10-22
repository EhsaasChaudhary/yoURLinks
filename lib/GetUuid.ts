export default function GenerateUuid(): string {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const base = characters.length;

    let base62_response = '';
    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * base);
        base62_response += characters.charAt(randomIndex);
    }

    return base62_response;
}
