import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards,
	Request
} from "@nestjs/common";
import { ManualService } from "./manual.service";
import { CreateManualDto } from "./dto/create-manual.dto";
import { UpdateManualDto } from "./dto/update-manual.dto";
import { UpdateManualTagsDto } from "./dto/update-manual-tags.dto";
import { ApiTags, ApiOperation, ApiBearerAuth } from "@nestjs/swagger";
import { OwnerGuard } from "src/guards/owner.guard";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("manual")
@Controller("manuals")
export class ManualController {
	constructor(private readonly manualService: ManualService) {}

	@UseGuards(AuthGuard)
	@ApiBearerAuth()
	@ApiOperation({ summary: "Create new manual" })
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

	@ApiOperation({ summary: "Find manuals by user id" })
	@Get("user/:id")
	findByUserId(@Param("id") id: string) {
		return this.manualService.findByUserId(id);
	}

	@UseGuards(AuthGuard, /*OwnerGuard*/)
	@ApiBearerAuth()
	@ApiOperation({ summary: "Edit manual" })
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateManualDto: UpdateManualDto) {
		return this.manualService.update(id, updateManualDto);
	}

	@UseGuards(AuthGuard, /*OwnerGuard*/)
	@ApiBearerAuth()
	@ApiOperation({ summary: "Update tags list" })
	@Patch(":id")
	updateTagList(
		@Param("id") id: string,
		@Body() updateManualTagsDto: UpdateManualTagsDto
	) {
		return this.manualService.updateTagList(id, updateManualTagsDto);
	}

	@UseGuards(AuthGuard, /*OwnerGuard*/)
	@ApiBearerAuth()
	@ApiOperation({ summary: "Delete manual" })
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.manualService.remove(id);
	}
	
}
