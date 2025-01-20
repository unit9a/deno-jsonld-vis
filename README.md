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
  - can contain only json-LD json files. possibly other rdf formats
  - all json-ld should externally referenced in the html header. Example:
```
     <script src="ld/snippet.json" type="application/ld+json"></script>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata
https://html.spec.whatwg.org/multipage/microdata.html
https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript

combining Json-LD and microdata
- use microdata "itemType" properties to reference Json-LD property paths
- xpath 3.1 should be used to query both Json and html/xml path querying but must be defined in JSON-LD object
- values Must be extracted from the Html using xpath expression in the related/reference  json-ld object


annotation editor web app:
 - the reference htmlZ doc is loaded in a iframe (zipping & unzipping will ba added later)
 - the parent listens for changes in the reference html doc files
 - on startup and after any detected file is saved/change: the knowledge graph is updated

process:
1. vscode is use to edit html & json-LD with micro data item properties
2. web app listens for file save events and updates knowledge graph via x-path 3.1
3. updated knowledge graph is referenced from the Wot description: "index-wot-kg.json"  
4. rdf.js converts "index-wot-kg.json" to RDF data
5. this output RDF is synced with solidPod
6. rdf is then visualized
7. rdf SPARQL queries are use exclusively to build json objects that feed:
  - documentation generation
  - in browser 3d rendering of the physical product/item.

json-ld is visualized with json-vis

test case:
virtual joystick app
- the remapping to vJoy is stored as a jsonLd document that in users solidpod 
- the SPARQL knowledge graph is used to:
  - create an in browser 3d rendering of the physical device 
  - to label all svg 2d isometric views of the physical device
    - svgs must be made from images in the documentation
- svgs are animated with javascript in response to input events

regarding 3d:
https://www.youtube.com/watch?v=KKUI64_5MB8
https://www.web3d.org/getting-started-x3d

-- this is hacky -- AVOID!!!
regarding 2d - use svg if needed
-dimension are aged as line annotation 