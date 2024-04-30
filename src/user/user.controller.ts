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
import {
	ApiTags,
	ApiOperation,
	ApiBearerAuth,
	ApiResponse
} from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { IsSelfGuard } from "../guards/is-self.guard";
import { IsNotSelfGuard } from "src/guards/is-not-self.guard";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("user")
@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: "Create new user" })
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

	@ApiOperation({ summary: "Get all users" })
	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@ApiOperation({ summary: "Get one user" })
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.userService.findById(id);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: "Edit user" })
	@UseGuards(AuthGuard, IsSelfGuard)
	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: "Delete user" })
	@UseGuards(AuthGuard, IsSelfGuard)
	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.userService.remove(id);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: "Follow user" })
	@ApiResponse({ status: 201, description: "Followed" })
	@ApiResponse({ status: 400, description: "BadRequest" })
	@ApiResponse({ status: 409, description: "Conflict" })
	@UseGuards(AuthGuard, IsNotSelfGuard)
	@Post("/follow/:id")
	follow(@Param("id") id: string, @Request() req) {
		const { userId } = req.user;
		return this.userService.follow(id, userId);
	}

	@ApiBearerAuth()
	@ApiOperation({ summary: "Unfollow user" })
	@ApiResponse({ status: 200, description: "Unfollowed" })
	@ApiResponse({ status: 400, description: "BadRequest" })
	@ApiResponse({ status: 409, description: "Conflict" })
	@UseGuards(AuthGuard, IsNotSelfGuard)
	@Delete("/follow/:id")
	unfollow(@Param("id") id: string, @Request() req) {
		const { userId } = req.user;
		return this.userService.unfollow(id, userId);
	}
}
