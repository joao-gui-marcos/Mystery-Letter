# Welcome to the Mysterious Letter project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   A site that generates mystery letters, that is, given a value typed in a text field, present the words with the appearance of a letter where each word has its own stylization.

💡See a sample below:

![](sample.gif)

# Mandatory Requirements:

## 1 - There must be a`input`with id=\\"text-letter\\" where the user can type the content of the letter

<details>
  <summary>Sua página deve conter um input com id="carta-texto"</summary><br />

**what will be checked**

-   There is an element`input`
    -   Com`id=carta-texto`

</details>

## 2 - There must be a paragraph with the id=\\"generated-letter\\" where the user will see the result of their mystery letter

<details>
  <summary>Sua página deve conter um parágrafo com id="carta-gerada"</summary><br />

**what will be checked**

-   There is an element`p`
    -   As`id="carta-gerada"`

</details>

## 3 - There must be a button with id=\\"create-letter\\" and by clicking on this button, the mystery letter must be generated

<details>
  <summary>Sua página deve conter um botão com id="criar-carta"</summary><br />

**Important points:**

-   Each word must appear within a tag`span`.
-   As tags`span`must be added as children of the paragraph that has the id`carta-gerada`.

**what will be checked**

-   There is an element`button`
    -   Com`id="criar-carta"`

-   By clicking the button, the mystery letter should be generated

</details>

## 4 - When creating a letter through the button with id="create-card", the`input`with id="letter-text" must remain with the typed text

<details>
  <summary>O input com o id="carta-texto" deve permanecer com o texto digitado</summary><br />

**what will be checked**

-   When creating a letter through the button`id="criar-carta"`o input com`id="carta-texto"`remains with the typed text

</details>

## 5 - If the user does not fill in the field or fills it with only empty spaces, add the message 'Please enter the contents of the letter.'

<details>
  <summary>Quando não houver texto, a mensagem "Por favor, digite o conteúdo da carta" deve aparecer em um parágrafo</summary><br />

**what will be checked**

-   Leaving this blank will display the message "Please enter the contents of the letter." in the element`p`as`id="carta-gerada"`
-   Entering blanks will display the message "Please enter the contents of the letter." in the element`p`as`id="carta-gerada"`

</details>

## 6 - Create the class`newspaper`

<details>
  <summary>A classe <code>newspaper</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `background-color`with the value`rgb(250, 235, 215)`
    -   `font-family`with the value`Times New Roman`
    -   `font-weight`with the value`700`

**what will be checked**

-   It will be validated if the class`newspaper`has the properties:
    -   `background-color`equal to`rgb(250, 235, 215)`;
    -   `font-family`equal to`Times New Roman`;
    -   `font-weight`equal to`700`.

</details>

## 7 - Create the class`magazine1`.

<details>
  <summary>A classe <code>magazine1</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `background-color`with the value`rgb(0, 128, 128)`
    -   `color`with the value`rgb(255, 255, 255)`
    -   `font-family`with the value`Verdana`
    -   `font-weight`with the value`900`
    -   `text-transform`with the value`uppercase`

**what will be checked**

-   It will be validated if the class`magazine1`has the properties:
    -   `background-color`equal to` rgb(0, 128, 128)`;
    -   `color`equal to`rgb(255, 255, 255)`;
    -   `font-family`equal to`Verdana`;
    -   `font-weight`equal to`900`;
    -   `text-transform`equal to`uppercase`.

</details>

## 8 - Create the class`magazine2`.

<details>
  <summary>A classe <code>magazine2</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `background-image`with the image`images/pink-pattern.png`
    -   `color`with the value`rgb(255, 0, 255)`
    -   `font-family`with the value`Verdana`
    -   `font-weight`with the value`900`

**what will be checked**

-   A class`magazine2`has the properties:
    -   `background-image`equal to`images/pink-pattern.png`;
    -   `color`equal to`rgb(255, 0, 255)`;
    -   `font-family`equal to`Verdana`;
    -   `font-weight`equal to`900`.

</details>

## 9 - Create the class`medium`.

<details>
  <summary>A classe <code>medium</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `font-size`with the value`20px`
    -   `padding`with the value`8px`

**what will be checked**

-   A class`medium`owns the property:
    -   `font-size`equal to`20px`;
    -   `padding`equal to`8px`.

</details>

## 10 - Create the class`big`.

<details>
  <summary>A classe <code>big</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `font-size`with the value`30px`;
    -   `padding`with the value`10px`.

**what will be checked**

-   A class`big`has the properties:
    -   `font-size`with the value`30px`;
    -   `padding`with the value`10px`.

</details>

## 11 - Create the class`reallybig`.

<details>
  <summary>A classe <code>reallybig</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `font-size`with the value`40px`;
    -   `padding`with the value`15px`.

**what will be checked**

-   A class`reallybig`has the properties:
    -   `font-size`with the value`40px`;
    -   `padding`with the value`15px`.

</details>

## 12 - Create the class`rotateleft`.

<details>
  <summary>A classe <code>rotateleft</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `transform`with the value`matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

**what will be checked**

-   A class`rotateleft`own the property`transform`equal to`matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)`

</details>

## 13 - Create the class`rotateright`.

<details>
  <summary>A classe <code>rotateright</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `transform`with the value`matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

**what will be checked**

-   A class`rotateright`own the property`transform`equal to`matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)`

</details>

## 14 - Create the class`skewleft`.

<details>
  <summary>A classe <code>skewleft</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `transform`with the value`matrix(1, 0, 0.176327, 1, 0, 0)`;

**what will be checked**

-   A class`skewleft`own the property`transform`equal to`matrix(1, 0, 0.176327, 1, 0, 0)`

</details>

## 15 - Create the class`skewright`.

<details>
  <summary>A classe <code>skewright</code> deve possuir propriedades específicas</summary><br />

**Important points:**

-   Set the properties:
    -   `transform`with the value`matrix(1, 0, -0.176327, 1, 0, 0)`;

**what will be checked**

-   A class`skewright`own the property`transform`equal to`matrix(1, 0, -0.176327, 1, 0, 0)`

</details>

## 16 - Add classes at random in order to style the words.

<details>
  <summary>Utilize o <code>Javascript</code> para atribuir as classes de forma aleatória</summary><br />

**Important points:**

-   Classes must be added to tags`span`so**Random**.

-   Always add more than one class to a word.

-   Utilize as classes:
    -   `newspaper`,`magazine1`,`magazine2`(style group)
    -   `medium`,`big`,`reallybig`(Size group)
    -   `rotateleft`,`rotateright`(rotation group)
    -   `skewleft`,`skewright`(Slope group)

-   **No**use more than one class from the same group.

-   All words must contain one class from each group.

-   That is, if you use the classes`magazine1`,`big`,`rotateleft`e`skewright`in a word, the other classes of each group must not be used for that same word. For example, the classes of the style group would not be used`newspaper`e`magazine2`because the class`magazine1`is already being used.

**what will be checked**

-   When creating a card, she receives a list of random classes

-   When creating a second card, she receives a list of random classes

-   The classes of the two cards are not exactly the same

</details>

# Bonus Requirements:

## 17 - With a mystery letter generated, add the possibility to change the style of a specific word by clicking on it

<details>
  <summary>Ao clicar na carta gerada, a classe dela é alterada</summary><br />

**Important points:**

-   When clicking on a word, a new style**random**must be applied.
-   The number of changes must be unlimited.

**what will be checked**

-   The word contains four classes, one from each group;

-   When clicking on a card, a new random list of classes is generated;

-   By clicking again on the same card, a new random list of classes is generated and if the new list is different from the previous list;

</details>

## 18 - There must be a paragraph with the id=\\"letter-counter\\" where there will be a word counter

<details>
  <summary>Sua página deve conter um paragrafo com id="carta-contador" que conte quantas palavras foram geradas</summary><br />

**Important points:**

-   This counter must inform the number of words present in the generated mystery letter.

**what will be checked**

-   There is an element`p`as`id="carta-contador"`

-   When creating a letter the element`p`as`id="carta-contador"`is updated with the number of words in the letter (numeric value).

</details>
