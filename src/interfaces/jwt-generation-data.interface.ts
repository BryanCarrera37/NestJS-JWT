export interface JwtGenerationData {
    payload: any;
    secret: string;
    expirationTime: string;
}