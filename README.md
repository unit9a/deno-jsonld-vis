# deno-jsonld-vis

deno port of jsonld-vis

https://www.w3.org/wiki/Ontology_editors

https://github.com/ozekik/awesome-ontology?tab=readme-ov-file

https://github.com/rdfjs-base/serializer-jsonld-ext

ontology driven autocomplete:
https://github.com/vemonet/json-ld-editor-react/blob/7babd4a384581d006b77fa28cff0f0a8a9512a10/src/components/RenderObjectForm.tsx#L210

json editor components: https://github.com/josdejong/jsoneditor

multi ontology model

- schema (WoT:TD ontology) - explains operation usage and generate user docs
  - this must contain LD queries of the subsystem semantic annotations to define each
    capability/feature
  - "extra" documentation is put here

subsystems(each is a semantic annotation):
- structure/chassis/design/materials relationship
  - link to assembly info to operation documentation/spec/datasheet info 
- mechatronics/plant-operation relationship
    - control relationship 
      - links to software info/documentation to electronics/circuitry
    - electronics relationship
        - links actuators/senors or I/O to electronic component/part
    - mechanics relationship
      - links actuators/senors to assembly info


logistics?
 - manufacture/creation 

a link datum object(json-LD script tags): each link should contain a reference to the source
materials - for images: use image maps (possibly parts of images are converted
to svgs?) - for text: use page, line, and character numbers when possible - for
video use image maps + time stamps - for audio use timeStamps - use xml xpath
queries to match any semantic html annotation when possible

source materials: must be converted to a "reference html doc site folder"( implemented as a self contained html site zip file):
NO js, semantic html annotation must be used

- must include source pdf or image or binary
- there must be a folder called LD
  - can contain only json-LD files. possibly other rdf formats
  - all json-ld should externally referenced in the html. Example:
```
     <script src="ld/snippet.json" type="application/ld+json"></script>
```

json ld editing spa web tool
 - the reference html doc is loaded in a iframe 
 -  the parent listens for changes in the reference html doc
 - on startup and after any detected file change: the html is parsed
  - parent iterates over all jsonLD script tags to build json doc mapping a jsonLD file path+name to its contents. 
- parent uses this json doc map  to build a FLAT knowledge graph of subsystems
    - the file path becomes the jsonld snippet ID
- parent can/Must? convert this to owl/rdf to enable querying?
  - can json Path be used?
  - !! is jsonLD can be converted to RDF then USE SPARQL.


regarding 3d:
https://www.youtube.com/watch?v=KKUI64_5MB8
https://www.web3d.org/getting-started-x3d

-- this is hacky -- AVOID!!!
regarding 2d - use svg if needed
-dimension are aged as line annotation 