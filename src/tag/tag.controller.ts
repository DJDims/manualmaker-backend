import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('tag')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @ApiOperation({ summary: 'Create new tag' })
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @ApiOperation({ summary: 'Get all tags' })
  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @ApiOperation({ summary: 'Get one tag by id' })
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tagService.findById(id);
  }

  @ApiOperation({ summary: 'Get one tag by name' })
  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.tagService.findByName(name);
  }

  @ApiOperation({ summary: 'Edit tag' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(id, updateTagDto);
  }

  @ApiOperation({ summary: 'Delete tag' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagService.remove(id);
  }
}
