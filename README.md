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
  - this must contain LD queries of the subsystems that define each
    capability/feature

subsystems(each  is knowledge graph):
- structure/chassis
  - link to assembly info
  - link to operation spec
- mechatronics/plant operation
    - control
        - links to software info/documentation
        - links to electronics
    - electronics
        - links actuators/senors or I/O
        - links to electronic component/part
    - mechanics
        - links actuators/senors
        - links to assembly info

a link datum object: each link should contain a reference to the source
materials - for images: use image maps (possibly parts of images are converted
to svgs?) - for text: use page, line, and character numbers when possible - for
video use image maps + time stamps - for audio use timeStamps - use xml xpath
queries to match any semantic html annotation when possible

source materials: must be converted to a self contained html zip file :
no/minimal js, semantic html annotation must be used

- must include source pdf or image or binary
