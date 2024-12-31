import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiResponseOptions } from '@nestjs/swagger'
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @ApiTags('root')
    @ApiResponse({status:200, description: "설명이 필요해",})
    @ApiResponse({status:401, description: "사공일"})
    getHello(): string {
        return this.appService.getHello();
    }
}
