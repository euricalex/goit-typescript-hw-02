/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;

}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class PageProps implements ComponentProps {
  constructor(public title: string) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const pageProps = new PageProps("My Page");
const myPage = new Page(pageProps);
myPage.pageInfo();

export {};