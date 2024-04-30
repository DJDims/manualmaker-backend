import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards
} from "@nestjs/common";
import { ManualService } from "./manual.service";
import { CreateManualDto } from "./dto/create-manual.dto";
import { UpdateManualDto } from "./dto/update-manual.dto";
import { UpdateManualTagsDto } from "./dto/update-manual-tags.dto";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { OwnerGuard } from "src/guards/owner.guard";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("manual")
@Controller("manuals")
export class ManualController {
	constructor(private readonly manualService: ManualService) {}

	@ApiOperation({ summary: "Create new manual" })
	@UseGuards(AuthGuard)
	@Post()
	create(@Body() createManualDto: CreateManualDto) {
		return this.manualService.create(createManualDto);
	}

	@ApiOperation({ summary: "Find all manuals" })
	@Get()
	findAll() {
		return this.manualService.findAll();
	}

	@ApiOperation({ summary: "Find manual by id" })
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.manualService.findOne(id);
	}

	@UseGuards(AuthGuard, OwnerGuard)
	@ApiOperation({ summary: "Edit manual" })
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateManualDto: UpdateManualDto) {
		return this.manualService.update(id, updateManualDto);
	}

	@UseGuards(AuthGuard, OwnerGuard)
	@ApiOperation({ summary: "Update tags list" })
	@Patch(":id")
	updateTagList(
		@Param("id") id: string,
		@Body() updateManualTagsDto: UpdateManualTagsDto
	) {
		return this.manualService.updateTagList(id, updateManualTagsDto);
	}

	@UseGuards(AuthGuard, OwnerGuard)
	@ApiOperation({ summary: "Delete manual" })
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.manualService.remove(id);
	}
	
}
