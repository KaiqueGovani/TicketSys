import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateEventRequest } from './request/create-event.request';
import { UpdateEventRequest } from './request/update-event.request';
import { ReserveSpotRequest } from './request/reserve-spot.request';
import { EventsService } from '@app/core';
import { AuthGuard } from '@app/core/auth/auth.guard';
import { ReserveSpotResponse } from './response/reserve-spot.response';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventRequest) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventRequest: UpdateEventRequest) {
    return this.eventsService.update(id, updateEventRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Post(':id/reserve')
  async reserveSpot(@Param('id') eventId: string, @Body() reserveSpotRequest: ReserveSpotRequest) {
    const tickets = await this.eventsService.reserveSpot({ ...reserveSpotRequest, eventId });
    return new ReserveSpotResponse(tickets);
  }
}
