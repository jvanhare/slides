import { createRoot } from "react-dom/client";

import { Heading, Link, ListItem, Text, UnorderedList } from "spectacle";

import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

import Alert from "./components/Alert";
import Centered from "./components/Centered";
import Equation from "./components/Equation";
import Full from "./components/Full";
import Image from "./components/Image";
import InriaDeck from "./components/InriaDeck";
import TwoColumns from "./components/TwoColumns";

import "./index.css";

const Presentation = () => (
  <InriaDeck>
    <Full>
      <Heading color="primary" textAlign="left">
        Context
      </Heading>
      <Text>
        <UnorderedList>
          <ListItem>
            7th AIAA CFD <Alert>Drag</Alert> Prediction Workshop{" "}
            <Link color="lightblue" href="https://aiaa-dpw.larc.nasa.gov">
              [https://aiaa-dpw.larc.nasa.gov]
            </Link>
          </ListItem>
          <UnorderedList>
            <ListItem>
              Predict the effect of shock-induced separation on the variation of
              lift and pitching moment with increasing angle-of-attack at
              transonic conditions
            </ListItem>
            <ListItem>
              <Alert>Critical</Alert> to aircraft safety and government
              certification regulations
            </ListItem>
            <ListItem>
              NASA CRM Wing-Body configuration{" "}
              <Link
                color="lightblue"
                href="https://commonresearchmodel.larc.nasa.gov"
              >
                [https://commonresearchmodel.larc.nasa.gov]
              </Link>
            </ListItem>
            <ListItem>
              Special focus on Case 1a. targetting grid convergence
            </ListItem>
            <ListItem>Flow conditions:</ListItem>
            <UnorderedList>
              <ListItem>
                <Latex>{`$M = 0.85 ~ [-] $`}</Latex>
              </ListItem>
              <ListItem>
                <Latex>{`$ Re = 20 \\cdot 10^6 ~ [-] $`}</Latex>
              </ListItem>
              <ListItem>
                <Latex>{`$ T = -250 ~ [^\\circ{}F] $`}</Latex>
              </ListItem>
              <ListItem>
                <Latex>{`$ C_L = 0.58 ~ [-] $`}</Latex>
              </ListItem>
            </UnorderedList>
          </UnorderedList>
          <ListItem>
            Mesh convergence study achieved thanks to our{" "}
            <Alert>anisotropic unstructured mesh adaptation</Alert> process
          </ListItem>
        </UnorderedList>
      </Text>
    </Full>

    <Full>
      <Heading color="primary" textAlign="left">
        Flow solver
      </Heading>
      <UnorderedList>
        <ListItem>
          Compressible turbulent Navier-Stokes equations
          <Equation>
            <Latex>{`$$ \\dfrac{\\partial W}{\\partial t} + \\nabla \\cdot \\mathcal{F} \\left( W \\right) = \\mathcal{Q} \\left( W \\right) + \\mathcal{S} \\left( W \\right) $$`}</Latex>
          </Equation>
        </ListItem>
        <ListItem>Spalart-Allmaras turbulence model</ListItem>
        <ListItem>Mixed Element Volume method (MEV)</ListItem>
        <UnorderedList>
          <ListItem>
            Convective and source terms by Finite Volume method
          </ListItem>
          <ListItem>Diffusive terms by Finite Element method</ListItem>
        </UnorderedList>
        <ListItem>Vertex-centered using median cells</ListItem>
        <ListItem>Implicit time integration</ListItem>
        <UnorderedList>
          <ListItem>SGS iterative solver</ListItem>
          <ListItem>
            All terms are fully differentiated except for convective terms due
            to memory considerations
          </ListItem>
          <ListItem>Strong implicit solver</ListItem>
        </UnorderedList>
      </UnorderedList>
    </Full>

    <Full>
      <Heading color="primary" textAlign="left">
        Metric-based local remesher
      </Heading>
      <UnorderedList>
        <ListItem>Based on a unique cavity operator</ListItem>
        <ListItem>
          Remesh the surface and the volume at the same time based on geometry
          surface definition to <Alert>insert points on the surface</Alert>
        </ListItem>
      </UnorderedList>
      <Image
        fileName="metric.png"
        legend="Metric-based local remeshing."
        width="62%"
      />
    </Full>

    <TwoColumns
      title="Results"
      left={<Image fileName="cl.svg" legend="Lift convergence." width="90%" />}
      right={
        <Image fileName="cm.svg" legend="Moment convergence." width="90%" />
      }
    ></TwoColumns>

    <Full>
      <Heading color="primary" textAlign="left">
        Results
      </Heading>
      <Image fileName="cd.svg" legend="Drag convergence." width="50%" />
    </Full>

    <Centered>
      <Heading color="secondary">Conclusions & perspectives</Heading>
      <UnorderedList>
        <ListItem>
          Goal-oriented anisotropic mesh adaptation illustatred on a DPW7 test
          case
        </ListItem>
        <ListItem>
          The geometry definition is <Alert>crucial</Alert> for mesh adaptation
          convergence
        </ListItem>
        <ListItem>No compatibility between CAD kernels</ListItem>
        <ListItem>
          Even if the CAD format were easily readable, there is no access to the
          parametrization needed for shape optimization problem
        </ListItem>
        <ListItem>
          <Alert>No geometry, no mesh, no solution, ...</Alert>
        </ListItem>
        <ListItem>
          Quantify the impact on drag of this misdefined geometry which clearly
          does not have the right wetted surface
        </ListItem>
      </UnorderedList>
    </Centered>
  </InriaDeck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
