import { Module } from "@nestjs/common";
import { TokenizationService } from "./tokenization.service";
import { JwtService } from "@nestjs/jwt";

@Module({
    exports: [
        TokenizationService,
        JwtService
    ],
    providers: [
        TokenizationService,
        JwtService
    ]
})
export class TokenizationModule {}