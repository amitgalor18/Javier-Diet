
interface JavierProps {
    health: number;
}

type SpriteConfig = {
    url: string;
    frames: number;
};

export function Javier({ health }: JavierProps) {
    // Configuration for sprites
    // "Some are 5 frames" -> Assuming key ones are 5, others might be 4.
    // Adjust these based on visual feedback if needed.
    const SPRITES: Record<string, SpriteConfig> = {
        ecstatic: { url: "/assets/cat-jump.png", frames: 5 },
        happy: { url: "/assets/cat-idle.png", frames: 4 },
        bored: { url: "/assets/cat-bored.png", frames: 5 },
        sick: { url: "/assets/cat-sick.png", frames: 5 }
    };

    let mood = "happy";
    if (health >= 80) mood = "ecstatic";
    else if (health >= 50) mood = "happy";
    else if (health >= 20) mood = "bored";
    else mood = "sick";

    const config = SPRITES[mood];

    // Animation Logic:
    // To loop N frames perfectly with `background-position: 100% 0`,
    // we use `steps(N-1)`.
    // Example: 4 frames -> steps(3). 5 frames -> steps(4).
    const stepCount = config.frames - 1;

    return (
        // Width reduced (w-64 -> w-56). Height increased (h-64 -> h-72) to prevent cropping.
        <div className="relative w-56 h-72 transition-transform duration-500">
            {/* Shadow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/20 rounded-full blur-md" />

            {/* Sprite */}
            <div
                className="w-full h-full pixelated translate-y-4"
                style={{
                    backgroundImage: `url('${config.url}')`,
                    // Width is logical (frames * 100%). Height is auto to preserve aspect ratio (fixes squish).
                    // This naturally crops top/bottom if container is shorter than image.
                    backgroundSize: `${config.frames * 100}% auto`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '45%', // Slightly lower to ensure feet are visible while keeping head
                    animation: `sprite-animation 0.8s steps(${stepCount}) infinite`
                }}
            />

            <style jsx>{`
                @keyframes sprite-animation {
                    from { background-position-x: 0; }
                    to { background-position-x: 100%; }
                }
            `}</style>
        </div>
    );
}
