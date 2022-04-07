import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header/header.component";
import { PageContainerComponent } from "./component/page-container/page-container.component";
import { SiderComponent } from "./component/sider/sider.component";
import { LayoutComponent } from "./layout.component";
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutComponent, HeaderComponent, PageContainerComponent, SiderComponent, FooterComponent],
  exports: [LayoutComponent, HeaderComponent, PageContainerComponent, SiderComponent, FooterComponent]
})

export class LayoutSystemModule {}