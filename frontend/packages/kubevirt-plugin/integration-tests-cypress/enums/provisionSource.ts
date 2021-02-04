import { ObjectEnum } from '@console/shared/src/constants/object-enum';

export class ProvisionSource extends ObjectEnum<string> {
  static readonly URL = new ProvisionSource(
    'URL',
    'Import via URL (creates PVC)',
    'https://download.fedoraproject.org/pub/fedora/linux/releases/33/Cloud/x86_64/images/Fedora-Cloud-Base-33-1.2.x86_64.raw.xz',
  );

  static readonly REGISTRY = new ProvisionSource(
    'Registry',
    'Import via Registry (creates PVC)',
    'quay.io/kubevirt/cirros-container-disk-demo:latest',
  );

  static readonly PXE = new ProvisionSource('PXE', 'PXE (network boot - adds network interface)');

  static readonly CLONE_PVC = new ProvisionSource('Clone', 'Clone existing PVC (creates PVC)');

  static readonly UPLOAD = new ProvisionSource('Upload', 'Upload local file (creates PVC)');

  private readonly description: string;

  private readonly source: string;

  protected constructor(value: string, description: string, source?: string) {
    super(value);
    this.description = description;
    this.source = source;
  }

  public getDescription = () => this.description;

  public getSource = () => this.source;

  public getValue = (): string => this.value;
}
