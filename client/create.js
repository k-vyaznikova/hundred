import fs from 'fs';

const contentClassFile = (objectName) => {
  const upObjectName = objectName[0].toUpperCase() + objectName.slice(1);
  return `
import React from 'react';
import * as styles from './${objectName}.module.scss';

interface ${upObjectName}Props {}

const ${upObjectName} = (props: ${upObjectName}Props) => {
    return ();
}

export default ${upObjectName};
`;
}

const contentIndexFile = (objectName) => {
  const upObjectName = objectName[0].toUpperCase() + objectName.slice(1);
  return `
  import ${upObjectName} from './${objectName}.tsx';
  export default ${upObjectName};
  `;
}


const createObject = (parentFolder, objectName) => {
  /**
   *  @parentFolder - название папки, где ссоздавать объект
   *  @objectName - название компонента, camel-case, первая буква - строчная 
   */
  const objectFolder = 'src' + '/' + parentFolder+ '/' + objectName;
  try {
    if (!fs.existsSync(objectFolder)) {
      console.log('in exist check')
      fs.mkdirSync(objectFolder, {recursive: true});
      console.log('folder created');

      /**
       * создание файла с классом
       */
      const fullObjectName = objectFolder+ '/' +objectName + '.tsx';
      fs.open(fullObjectName, 'w', (err) => {
        try{
          if(err) throw err;
          const content1 = contentClassFile(objectName);
          console.log(content1)
          fs.writeFileSync(fullObjectName, content1);
        }
        catch (err) {
          console.error(err);
        }
      });
      /************************ */


      /**
       * создание index
       */
      const fullIndexName = objectFolder+ '/index.js';
      fs.open(fullIndexName, 'w', (err) => {
        try{
          if(err) throw err;
          const content2 = contentIndexFile(objectName);
          fs.writeFileSync(fullIndexName, content2);
        }
        catch (err) {
          console.error(err);
        }
      });
      /************************ */



      /**
       * создание файла со стилями
       */
      const fullStyleName = objectFolder+ '/' + objectName + '.module.scss';
      fs.open(fullStyleName, 'w', (err) => {
          if(err)
            console.error(err);
      });
      /************************ */


    }
  } catch (err) {
    console.error(err);
  }
}




createObject('components', 'button');
