"use client";

import { selectTicketKindAction } from "../../../../actions";

export type TicketKindSelectProps = {
  defaultValue: "FULL" | "HALF";
  price: number;
};

export function TicketKindSelect(props: TicketKindSelectProps) {
  const formattedFullPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price);
  const formattedHalfPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.price / 2);
  return (
    <>
      <label htmlFor="ticket-type">Escolha o tipo de ingresso</label>
      <select
        name="ticket-type"
        id="ticket-type"
        className="mt-2 rounded-lg bg-input px-4 py-[14px]"
        defaultValue={props.defaultValue}
        onChange={async (e) => {
          await selectTicketKindAction(e.target.value as any);
        }}
      >
        <option value="FULL">Inteira - {formattedFullPrice}</option>
        <option value="HALF">Meia-entrada - {formattedHalfPrice}</option>
      </select>
    </>
  );
}
