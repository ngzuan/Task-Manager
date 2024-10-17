import { Module } from '@nestjs/common';
import { ProjectController } from 'src/controllers/project.controller';
import { ProjectService } from 'src/services/project.service';

@Module({
    imports: [],
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule { }
