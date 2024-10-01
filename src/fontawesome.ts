// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // Import all solid icons

// Add the entire solid icons set to the library
library.add(fas)

export default FontAwesomeIcon
