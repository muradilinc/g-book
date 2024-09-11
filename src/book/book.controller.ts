import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {CreateBookDto} from "./create-book.dto";

@Controller('book')
export class BookController {
    constructor(private prisma: DatabaseService) {
    }

    @Post()
    async createBook(@Body() bookDto: CreateBookDto) {
        return this.prisma.book.create({
            data: bookDto
        });
    }

    @Get()
    async getAll() {
        return this.prisma.book.findMany();
    }

    @Get(':id')
    async getSingleBook(@Param('id') id: string) {
        return this.prisma.book.findUnique({where: {id: Number(id)}});
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() updateDto: CreateBookDto) {
        return this.prisma.book.update({
            where: {id: Number(id)},
            data: {
                name: updateDto.name,
                author: updateDto.author,
                created_date: updateDto.created_date
            }
        });
    }

    @Delete(':id')
    async removeBook(@Param('id') id: string) {
        return this.prisma.book.delete({where: {id: Number(id)}});
    }
}
