import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { OperationException } from 'src/exceptions/bad-request.exception';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  //para traer la info
  @Get()
  getProfileInfo() {
    return this.profileService.getProfileInfo();
  }
  //para crear la info

  @UseGuards(RolesGuard)
  @Roles('Admin')
  @Post()
  createProfile(@Body() profileInfo) {
    try {
      return this.profileService.createProfileInfo(profileInfo);
    } catch (error) {
      throw new OperationException('No se pudo crear el perfil');
    }
  }
  //para editar la info
  @UseGuards(RolesGuard)
  @Roles('Admin')
  @Patch()
  editProfileInfo(@Body() editedInfo) {
    try {
      return this.profileService.editProfileInfo(editedInfo);
    } catch (error) {
      throw new OperationException('No se pudo editar el perfil');
    }
  }
}
