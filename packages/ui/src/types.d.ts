import type { config } from '@my-proj/tamagui-config';

type Conf = typeof config;

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
