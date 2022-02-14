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
    {id: 1,
    name: primogato
  },
    {
      id:2,
      name:
      keller,
    },
    {
      id:3,
      name: natural
    },
    {
      id:4,
      name: primocao
    },
    {
      id:5,
      name: bigboss
    },
    {
      id:6,
      name: iams
    },
    {
      id:7,
      name: thegoldenchoice
    },
    {
      id:8,
      name: thegoldenchoice
    },
    {
      id:9,
      name: pedigree
    }
    ,
    {
      id:10,
      name: eukanuba
    }
    ,
    {
      id:11,
      name: gati
    }
    ,
    {
      id:12,
      name: dogui
    }
    ,
    {
      id:13,
      name: pacha
    }
    ,
    {
      id:14,
      name: protemix
    }
    ,
    {
      id:15,
      name: royalcanin
    }
    ,
    {
      id:16,
      name: toky
    }
    ,
    {
      id:17,
      name: tiernitos
    }
    ,
    {
      id:18,
      name: virbac
    }
    ,
    {
      id:19,
      name: whiskas
    }
    ,
    {
      id:20,
      name: wits
    }
    ,
    {
      id:21,
      name: jazz
    }
    ,
    {
      id:22,
      name: hills
    }
    ,
    {
      id:23,
      name: hillsdiet
    }
    ,
    {
      id:24,
      name: maxcat
    }
    ,
    {
      id:25,
      name: max
    }
    ,
    {
      id:26,
      name: dogchow
    }
    ,
    {
      id:27,
      name: catchow
    }
    ,
    {
      id:28,
      name: connie
    }
    ,
    {
      id:29,
      name: dogselection
    }
    ,
    {
      id:30,
      name: dogselectionblack
    }
    ,
    {
      id:31,
      name: equilibrio
    }
    ,
    {
      id:32,
      name: frost
    }
    ,
    {
      id:33,
      name: lager
    }
    ,
    {
      id:34,
      name: proplan
    }
    ,
    {
      id:35,
      name: excellent
    }
    
  ];

 

 


  return (
    <div className="Marcas">
      {marcas.map((marca) => (
        <div className="Marca" key={marca.id}>
          <img src={marca.name} className="Marca-img" alt="marca del producto" />
        </div>
      ))}
    </div>
  );
}

export default Marcas;
