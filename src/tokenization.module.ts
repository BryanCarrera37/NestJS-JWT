import { Module } from "@nestjs/common";
import { TokenizationHelperService } from "./tokenization-helper.service";

@Module({
    exports: [ TokenizationHelperService ],
    providers: [ TokenizationHelperService ]
})
export class TokenizationModule {}