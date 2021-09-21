import React from "react";

import primogato from "../images/marcas/primogato.jpeg";
import keller from "../images/marcas/keller.jpeg";
import natural from "../images/marcas/natural.jpeg";
import primocao from "../images/marcas/primocao.jpeg";
import bigboss from "../images/marcas/bigboss.jpeg";
import iams from "../images/marcas/iams.jpeg";
import thegoldenchoice from "../images/marcas/thegoldenchoice.jpeg";
import pedigree from "../images/marcas/pedigree.jpeg";
import eukanuba from "../images/marcas/eukanuba.jpeg";
import gati from "../images/marcas/gati.jpeg";
import dogui from "../images/marcas/dogui.jpeg";
import pacha from "../images/marcas/pacha.jpeg";
import protemix from "../images/marcas/protemix.jpeg";
import royalcanin from "../images/marcas/royalcanin.jpeg";
import toky from "../images/marcas/toky.jpeg";
import tiernitos from "../images/marcas/tiernitos.jpeg";
import virbac from "../images/marcas/virbac.jpeg";
import whiskas from "../images/marcas/whiskas.jpeg";
import wits from "../images/marcas/wits.jpeg";
import jazz from "../images/marcas/jazz.jpeg";
import hills from "../images/marcas/hills.jpeg";
import hillsdiet from "../images/marcas/hillsdiet.jpeg";
import maxcat from "../images/marcas/maxcat.jpeg";
import max from "../images/marcas/max.jpeg";
import dogchow from "../images/marcas/dogchow.jpeg";
import catchow from "../images/marcas/catchow.jpeg";
import connie from "../images/marcas/connie.jpeg";
import dogselection from "../images/marcas/dogselection.jpeg";
import dogselectionblack from "../images/marcas/dogselectionblack.jpeg";
import equilibrio from "../images/marcas/equilibrio.jpeg";
import frost from "../images/marcas/frost.jpeg";
import lager from "../images/marcas/lager.jpeg";
import proplan from "../images/marcas/proplan.jpeg";
import excellent from "../images/marcas/excellent.jpeg";

import "../scss/layout/components/_Marcas.scss";

function Marcas(props) {
  const marcas = [
    primogato,
    keller,
    natural,
    primocao,
    bigboss,
    iams,
    thegoldenchoice,
    pedigree,
    eukanuba,
    gati,
    dogui,
    pacha,
    protemix,
    royalcanin,
    toky,
    tiernitos,
    virbac,
    whiskas,
    wits,
    jazz,
    hills,
    hillsdiet,
    maxcat,
    max,
    dogchow,
    catchow,
    connie,
    dogselection,
    dogselectionblack,
    equilibrio,
    frost,
    lager,
    proplan,
    excellent,
  ];
  return (
    <div className="Marcas">
      {marcas.map((marca) => (
        <div className="Marca">
          <img src={marca} className="Marca-img" alt="marca del producto" />
        </div>
      ))}
    </div>
  );
}

export default Marcas;
