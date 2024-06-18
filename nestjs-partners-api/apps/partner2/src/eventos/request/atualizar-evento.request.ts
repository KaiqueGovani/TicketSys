import { PartialType } from '@nestjs/mapped-types';
import { CriarEventoRequest } from './criar-eventos';

export class AtualizarEventoRequest extends PartialType(CriarEventoRequest) {}
