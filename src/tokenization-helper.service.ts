import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService, TokenExpiredError } from "@nestjs/jwt";
import { Request } from "express";
import { ServerMessage } from "./const-values";
import { JwtGenerationData } from "./interfaces";

@Injectable()
export class TokenizationHelperService {

    constructor(
        private readonly jwtService: JwtService
    ) { }

    /**
     * Extract (get) the Token from the Request's headers
     * @param request Instance of Express Interface
     * @returns A String that consists in JWT received
     */
    extractTokenFromTheHeader(request: Request): string {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        if(!type || type !== 'Bearer') {
            throw new UnauthorizedException(ServerMessage.UNAUTHORIZED);
        }

        return token;
    }

    /**
     * It generates a JWT with the given data
     * @param data Values to be used to generate the JWT
     * @returns The JWT that has been generated
     */
    async generateToken(data: JwtGenerationData): Promise<string> {
        try {
            return await this.jwtService.signAsync(data.payload, {
                secret: data.secret,
                expiresIn: data.expirationTime
            });
        }
        catch (ex) { throw ex; }
    }

    /**
     * Get the payload used to create the JWT
     * @param token JWT from where will extract the Payload
     * @param secret Secret Key used to generate the JWT
     * @returns An object that represents the data used
     */
    async getPayloadFromTheToken<T>(token: string, secret: string): Promise<T> {
        try {
            return await this.jwtService.verifyAsync<any>(token, {
                secret: secret
            });
        }
        catch (ex) {
            if(ex instanceof TokenExpiredError) {
                throw new UnauthorizedException(ServerMessage.UNAUTHORIZED);
            }

            throw ex;
        }
    }
}