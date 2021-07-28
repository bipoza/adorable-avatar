import { Component, Host, h, Prop, State, getAssetPath } from '@stencil/core';
import { getColor, getRandomString } from '../../utils/utils';

@Component({
  tag: 'adorable-avatar',
  styleUrl: 'adorable-avatar.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class AdorableAvatar {
  @Prop() name: string = getRandomString();
  @Prop() size: number = 120;
  @Prop() eyes = "eyes1.png";
  @Prop() nose = "nose2.png";
  @Prop() mouth = "mouth10.png";
  @Prop() rounded: boolean = false;

  @State() color: string;
  componentDidLoad() {
    this.color = getColor(this.name)
  }


  render() {
    return (
      <Host>
        <slot>
          <div class="container" style={{
            backgroundColor: this.color,
            width: this.size + "px",
            height: this.size + "px",
            borderRadius: this.rounded && "50%"
          }}>
            <div class="face">
              <img src={getAssetPath(`./assets/eyes/${this.eyes}`)} />
              <img src={getAssetPath(`./assets/nose/${this.nose}`)} />
              <img src={getAssetPath(`./assets/mouth/${this.mouth}`)} />
            </div>
          </div>
        </slot>
      </Host>
    );
  }

}
