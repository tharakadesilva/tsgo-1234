import { defaultConfig } from '@tamagui/config/v5';
import { createTamagui } from 'tamagui';

export const config = createTamagui(defaultConfig);

export type Conf = typeof config;

// make imports typed
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
